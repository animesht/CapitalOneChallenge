import sys
import csv
import json
csv.field_size_limit(sys.maxsize)

times = {}

with open('oscar_tweets.csv', 'rb') as csvfile:

	read = csv.reader(csvfile)
	
	next(read)	
	for row in read:

		if row[2].replace(" ", "").lower().find("birdman") >= 0:
			ttime = row[0].split(" ")[3].split(":")
			time = int(ttime[0])*100 + int(ttime[1])
			
			if time not in times:
				times[time] = 1
			else:
				times[time] += 1

csvfile.close()

curmax = 0

for t in times:
	if times[t] > curmax:
		curmax = times[t]
		maxtime = t

print "Max tweets for 'birdman' at: ", int(maxtime/100), ":", ("%02d" %(maxtime%100))