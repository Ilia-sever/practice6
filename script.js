let f = (arr) => 
{
	function callback(call) {
		if (typeof(call)=='function') call()
	};
	let el;
	let arr2  = new Array (arr.length);
	for (let i=0;i<arr2.length;i++)
	{
		el=0;
		for (let j in arr[i]) el++;
		arr2[i]=el; 
	}
	let max=0;
	for (let i=0;i<arr2.length;i++)
		if (arr2[max]<arr2[i]) max=i;
	for (let i in arr[arr.length-1])
		callback(arr[arr.length-1][i])   
	return arr[max];
}

	/* готовый массив в помощь
	let arr =[
		user = {f:'Васин',i:'Вася',o:'Васильевич'},
		buser = {f2: 'Петин',i2:'Петя'},
		muser = {g:'Васин',i:'Вася',o:'Васильевич', ret:456},
		iser = {g:'sdf',r:'345',tth: function () {alert('Wat')}}
	];
	*/
