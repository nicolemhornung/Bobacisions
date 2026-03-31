import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def boba_generation(patron_order, patron_chain):
    prompt = f" A patron is asking for 3-5 drinks similar to {patron_order} from {patron_chain}. Provide drinks from the same chain or any other chain."
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages =[{"role": "user", "content" : prompt}], temperature=0.8)
    return response.choices[0].message.content
