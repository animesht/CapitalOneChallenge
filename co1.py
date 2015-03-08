import sys
import csv
csv.field_size_limit(sys.maxsize)

movies = {
	'americansniper' : 0,
	'imitationgame' : 0,
	'birdman' : 0,
	'selma' : 0 ,
	'theoryofeverything' : 0,
	'whiplash' : 0,
	'boyhood' : 0,
	'budapest' : 0
}

tweets = {}

with open('oscar_tweets.csv', 'rb') as csvfile:
	
	read = csv.reader(csvfile)
	
	next(read)
	for row in read:
		if row[2].replace("RT ", "") in tweets:
			continue
		else:
			tweets[row[2].replace("RT ","")] = int(row[3]) + 1
			
csvfile.close()

for tweet in tweets:
	for key in movies: 
		if tweet.replace(" ", "").lower().find(key) >= 0:
			movies[key] += tweets[tweet]

tup = []
for key in movies:
	tup.append((movies[key], key))

tup.sort(reverse=True)
i = 1

for value, key in tup:
	print i,")",key, ":", value
	i += 1