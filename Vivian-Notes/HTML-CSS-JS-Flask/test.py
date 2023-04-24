# Don't worry about this at the start! This tests out your API key and makes sure it works.

import requests
import json

# This is the API key you got from the website
API_KEY="8c619c35-4ee6-4f44-a5dd-50954b81503e"

# This is the prompt!
PROMPT="funny names for an indoor pet cow, in spanish"

res = requests.get(f"https://gpt.cobular.com/api/completion/{API_KEY}?query={PROMPT}&num=5")

if not res.ok:
    print("Something went wrong!")
    print(res.text)
    exit(1)

print(json.dumps(res.json(), indent=4))

# Example response

# {
#     "completion": [
#         "Vaquita Chiquita (Little Cow)",
#         "Mu (Moo)",
#         "Ternurita (Cutie Pie)",
#         "Vaca Loca (Crazy Cow)",
#         "Lechera Feliz (Happy Milkmaid)"
#     ],
#     "cost": 0.000366,
#     "success": true
# }