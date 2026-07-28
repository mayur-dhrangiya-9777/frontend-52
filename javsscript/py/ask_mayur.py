 from openai import OpenAI

client = OpenAI(api_key="YOUR_REAL_API_KEY")

print("Ask Mayur is ready! (type exit to stop)")

while True:
    user_input = input("You: ")

    if user_input.lower() == "exit":
        break

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": "You are Ask Mayur AI assistant."},
            {"role": "user", "content": user_input}
        ]
    )

    print("AI:", response.choices[0].message.content)