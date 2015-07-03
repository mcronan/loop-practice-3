var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];

/*****************************************
				1. Log age
*****************************************/

for(var i = 0; i < students.length; i ++) {
	console.log(students[i].age)
}


/*****************************************
				2. Log name, city
*****************************************/

for(var i = 0; i < students.length; i++ ) {
	console.log(students[i].name + ', ' + students[i].city)
}


/*****************************************
		3. Log name, city in sentence
*****************************************/

// find index 0, 2, 3
for(var i = 0; i < students.length; i ++) {
	if (( i === 0) || ( i === 2 ) || ( i === 3 )) {
	console.log(students[i].name + " is from " + students[i].city)
	}
}

/*****************************************
		 4. Name, age, 1, 2
*****************************************/

for(var i = 0; i < students.length; i ++ ) {
	if((i === 1) || (i === 2)) {
		console.log(students[i].name + " is older than " + students[0].age)
	}
}
