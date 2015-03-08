import sys
import csv
import json
csv.field_size_limit(sys.maxsize)

states = {
	("Alabama", "AL") : 0,
	("Alaska", "AK") : 0,
	("Arizona",	"AZ") : 0,
	("Arkansas", "AR") : 0,
	("California", "CA") : 0,
	("Colorado", "CO") : 0,
	("Connecticut", "CT") : 0,
	("Delaware", "DE") : 0,
	("District of Columbia", "DC") : 0,
	("Florida", "FL") : 0,
	("Georgia",	"GA") : 0,
	("Hawaii", "HI") : 0,
	("Idaho", "ID") : 0,
	("Illinois", "IL") : 0,
	("Indiana",	"IN") : 0,
	("Iowa", "IA") : 0,
	("Kansas", "KS") : 0,
	("Kentucky", "KY") : 0,
	("Louisiana", "LA") : 0,
	("Maine", "ME") : 0,
	("Montana",	"MT") : 0,
	("Nebraska", "NE") : 0,
	("Nevada", "NV") : 0,
	("New Hampshire", "NH") : 0,
	("New Jersey", "NJ") : 0,
	("New Mexico", "NM") : 0,
	("New York", "NY") : 0,
	("North Carolina", "NC") : 0,
	("North Dakota", "ND") : 0,
	("Ohio", "OH") : 0,
	("Oklahoma", "OK") : 0,
	("Oregon", "OR") : 0,
	("Maryland", "MD") : 0,
	("Massachusetts", "MA") : 0,
	("Michigan", "MI") : 0,
	("Minnesota", "MN") : 0,
	("Mississippi", "MS") : 0,
	("Missouri", "MO") : 0,
	("Pennsylvania", "PA") : 0,
	("Rhode Island", "RI") : 0,
	("South Carolina", "SC") : 0,
	("South Dakota", "SD") : 0,
	("Tennessee", "TN") : 0,
	("Texas", "TX") : 0,
	("Utah", "UT") : 0,
	("Vermont",	"VT") : 0,
	("Virginia", "VA") : 0,
	("Washington", "WA") : 0,
	("West Virginia", "WV") : 0,
	("Wisconsin", "WI") : 0,
	("Wyoming", "WY") : 0
}

with open('oscar_tweets.csv', 'rb') as csvfile:

	read = csv.reader(csvfile)
	
	next(read)
	for row in read:

		loc = row[8]

		if loc != "":
			for state in states:
				if loc.lower().find(state[0].lower()) >= 0 or loc.find(state[1]) >= 0:
					states[state] += 1

csvfile.close()

tup = []
for state in states:
	tup.append((states[state], state))

tup.sort(reverse=True)

for value, key in tup:
	print key[0], ":", value

jstates = {}
for state in states:
	jstates[state[1]] = states[state]

print "\nJSON output (for d3 visualization):"
print json.dumps(jstates)