from pymongo import MongoClient

client = MongoClient("mongodb://localhost:3030")

db = client["nuitInfo"]

collection = db["Quizz"]

def read3line() : 
	i = 0;
	j = 0
	h = 0
	ligne = [] 

	fd = open("question.txt", mode = 'r', encodinf = 'utf-8')
	while (i < 3) :
		ligne[i] = fd.readline()
		if (ligne[i] == None):
			return (False)
	i = 0
	if (ligne[i] == '-') :
		ligne[i] = ligne[i + 2]
		i = i + 1
		while (j < 2):
			while (ligne[i][h] != ':'):
				h+=1
			ligne[i] = ligne[i][h]

		
	document = {"nom": "Jean", "age": 30, "ville": "Paris"}
	collection.insert_one(document)
		

	

	