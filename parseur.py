from pymongo import MongoClient

def read3line (fd, collection) : 
    i = 0 
    j = 0
    h = 0
    ligne = [] 
    while (i < 5) :
        ligne.append(fd.readline())
        if (ligne[i] == ''):
            return (False)
        i += 1
    i = 0
    if (ligne[i][0] == '-') :
        ligne[i] = ligne[i][2 : ]
        i = i + 1
    ligne[0] = ligne[0].strip('\n')
    ligne[1] = ligne[1].split(':')[1].strip().strip('\n')
    ligne[2] = ligne[2].split(':')[1].strip().strip('\n')
    ligne[3] = ligne[3].split(':')[1].strip().strip('\n')
    ligne[4] = ligne[4].split(':')[1].strip().strip('\n')
    print(f"id : {ligne[1]}, question : {ligne[0]}, xp : {ligne[2]}, response : {ligne[3]} {ligne[3] == 'true'}, explication : {ligne[4]}\n\n")
    document = {"id" : ligne[1],"question": ligne[0], "xp": int(ligne[2]), "response": (ligne[3] == 'true'), "explication":ligne[4]}
    collection.insert_one(document)
        

client = MongoClient("mongodb://root:rootpassword@148.113.45.177:27017/nuitInfo?authSource=admin")
fd = open("questions.txt", mode = 'r', encoding = 'utf-8', errors='ignore')
db = client["nuitInfo"]
collection = db["quizzs"]

while (read3line(fd, collection) != False):
    pass

    