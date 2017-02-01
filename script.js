<html>
<head></head>
<body onload="f1()">
<script>
function f1() {
	let arr =[
	user = {f:'Васин',i:'Вася',o:'Васильевич'},
	buser = {f2: 'Петин',i2:'Петя'},
	muser = {g:'Васин',i:'Вася',o:'Васильевич', ret:456}
	];
	let f2 = (arr) => 
	{
	var el;
	let arr2 = new Array (arr.length);
	for (let i=0;i<arr2.length;i++)
	{
		el=0;
		for (let j in arr[i])
			el++;
		arr2[i]=el; 
	}
	let max=0;
	for (let i=0;i<arr2.length;i++)
		if (arr2[max]<arr2[i]) max=i;
	alert(max);
	}
	f2(arr);

}
</script>
</body>
</html>
