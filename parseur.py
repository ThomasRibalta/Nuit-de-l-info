from pymongo import MongoClient

def read3line (fd, collection) : 
	i = 0 
	j = 0
	h = 0
	ligne = [] 
	while (i < 3) :
		ligne.append(fd.readline())
		if (ligne[i] == ''):
			return (False)
		i += 1
	i = 0
	if (ligne[i] == '-') :
		ligne[i] = ligne[i][2 : ]
		i = i + 1
	ligne[1] = ligne[1].split(':')[1].strip().strip('\n')
	ligne[2] = ligne[2].split(':')[1].strip().strip('\n')
	print(ligne[1])
	document = {"question": ligne[0], "xp": int(ligne[1]), "response": bool(ligne[2])}
	collection.insert_one(document)
		

client = MongoClient("mongodb://root:rootpassword@localhost:27017/nuitInfo?authSource=admin")
fd = open("questions.txt", mode = 'r', encoding = 'utf-8', errors='ignore')
db = client["nuitInfo"]
collection = db["Quizz"]

while (read3line(fd, collection) != False):
	pass

	