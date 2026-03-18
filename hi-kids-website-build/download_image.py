import urllib.request
url = "https://lh3.googleusercontent.com/p/AF1QipN3-v-sF4uV-l9sF9n4I_D81w9sEQu7Cj_g7fXz=s1000"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
with urllib.request.urlopen(req) as response, open('public/images/kindergarten.jpg', 'wb') as out_file:
    data = response.read()
    out_file.write(data)
