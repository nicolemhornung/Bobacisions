import tkinter as tk
from tkinter import ttk
from chains import chains, similarity_match
import difflib
import os
import sys

BG = "#fff7fb"
ACCENT = "#ffb6d9"
ACCENT_LIGHT = "#ffe3f3"
TEXT = "#333333"

root = tk.Tk()
root.title("Bobacisions!")
root.geometry("820x820")
root.configure(bg=BG)

patron_chain = tk.StringVar()
patron_drink = tk.StringVar()

def resource_path(relative_path):
    try:
        base_path = sys._MEIPASS
    except Exception:
        base_path = os.path.abspath(".")
    return os.path.join(base_path, relative_path)


def get_closest_chain(user_input):
    user_input = user_input.lower()
    chain_lookup = {name.lower(): name for name in chains.keys()}
    match = difflib.get_close_matches(user_input, chain_lookup.keys(), n=1, cutoff=0.4)
    return chain_lookup[match[0]] if match else None


def get_closest_drink(chain, user_input):
    user_input = user_input.lower()
    drinks = []

    for series in chains[chain].values():
        for drink in series:
            drinks.append(drink["name"])

    drink_lookup = {name.lower(): name for name in drinks}
    match = difflib.get_close_matches(user_input, drink_lookup.keys(), n=1, cutoff=0.4)
    return drink_lookup[match[0]] if match else None


def recommendations():
    user_chain = patron_chain.get()
    user_drink = patron_drink.get()

    if not user_chain or not user_drink:
        error_label.config(text="Enter chain and drink.")
        return

    matched_chain = get_closest_chain(user_chain)
    if not matched_chain:
        error_label.config(text="Chain not included in database.")
        return

    matched_drink = get_closest_drink(matched_chain, user_drink)
    if not matched_drink:
        error_label.config(text="Boba not included in database.")
        return

    error_label.config(text="")

    matches = similarity_match(matched_chain, matched_drink)

    for widget in results_frame.winfo_children():
        widget.destroy()

    if not matches:
        error_label.config(text="No similar drinks found.")
        return

    tk.Label(
        results_frame,
        text="Your Curated Menu:",
        font=("Helvetica", 20, "bold"),
        bg=BG,
        fg=TEXT
    ).pack(pady=1)

    columns = ("Drink", "Chain", "Series", "Match %")

    style = ttk.Style()
    style.theme_use("default")

    style.configure(
        "Treeview",
        background="white",
        fieldbackground="white",
        foreground=TEXT,
        rowheight=25,
        font=("Helvetica", 12)
    )

    style.configure(
        "Treeview.Heading",
        background=ACCENT_LIGHT,
        foreground=TEXT,
        font=("Helvetica", 13, "bold")
    )

    table = ttk.Treeview(results_frame, columns=columns, show="headings")

    for col in columns:
        table.heading(col, text=col)
        table.column(col, width=180, anchor="center")

    for m in matches:
        table.insert("", "end", values=(
            m["name"],
            m["chain"],
            m["series"],
            f"{m['similarity']}%"
        ))

    table.pack(pady=10)


# --------- LAYOUT ---------

main_frame = tk.Frame(root, bg=BG)
main_frame.pack(fill="both", expand=True)

top_frame = tk.Frame(main_frame, bg=BG)
top_frame.pack(pady=25)

tk.Label(
    top_frame,
    text="Welcome to Bobacisions V.1!",
    font=("Helvetica", 36, "bold"),
    bg=BG,
    fg=TEXT
).pack(pady=5)

# Image
boba = tk.PhotoImage(file=resource_path("pixelboba.png"))
boba = boba.zoom(3, 3)

image_label = tk.Label(top_frame, image=boba, bg=BG)
image_label.pack(pady=10)

tk.Label(
    top_frame,
    text="Enter your favorite drink from your favorite chain and find similar matches!",
    font=("Helvetica", 16),
    bg=BG,
    fg=TEXT
).pack(pady=5)

# Input Card
input_card = tk.Frame(main_frame, bg=ACCENT_LIGHT)
input_card.pack(pady=20, ipadx=20, ipady=20)

tk.Label(
    input_card,
    text="Boba Bar:",
    font=("Helvetica", 14, "bold"),
    bg=ACCENT_LIGHT,
    fg=TEXT
).grid(row=0, column=0, pady=10)

chain_entry = tk.Entry(
    input_card,
    textvariable=patron_chain,
    width=30,
    font=("Helvetica", 13),
    bg="white",
    fg="black",
    insertbackground="black",
    relief="flat"
)
chain_entry.grid(row=1, column=0, padx=20, pady=5)

tk.Label(
    input_card,
    text="Boba of Choice:",
    font=("Helvetica", 14, "bold"),
    bg=ACCENT_LIGHT,
    fg=TEXT
).grid(row=2, column=0, pady=10)

drink_entry = tk.Entry(
    input_card,
    textvariable=patron_drink,
    width=30,
    font=("Helvetica", 13),
    bg="white",
    fg="black",
    insertbackground="black",
    relief="flat"
)
drink_entry.grid(row=3, column=0, padx=20, pady=5)

error_label = tk.Label(
    input_card,
    text="",
    fg="black",
    bg=ACCENT_LIGHT,
    font=("Helvetica", 12)
)
error_label.grid(row=4, column=0, pady=5)

tk.Button(
    input_card,
    text="Search!",
    command=recommendations,
    font=("Helvetica", 14, "bold"),
    bg=ACCENT,
    fg="black",
    activebackground="#ff9ccd",
    activeforeground="white",
    relief="flat",
    padx=20,
    pady=10
).grid(row=5, column=0, pady=15)

results_frame = tk.Frame(main_frame, bg=BG)
results_frame.pack(fill="both", expand=True, pady=20)

root.mainloop()
