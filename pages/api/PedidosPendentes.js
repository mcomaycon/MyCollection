async function PedidosPend(request, response) {

	var cEmail = "easbrasil@gmail.com";
	var cSenha = "Eas2125";
	var cRede = "5f4fe34fa92184004ba03d50";
	var cToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNhMWY5Y2Q1MGNlZjAwMzYyN2RhZDAiLCJlbWFpbCI6ImVhc2JyYXNpbEBnbWFpbC5jb20iLCJpYXQiOjE2MjUxNDcxMDN9.9Km4A3L0GeCZ6v-xFm3v39qO6bF0HwjxyTbELL5eu6Y"

	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGNhMWY5Y2Q1MGNlZjAwMzYyN2RhZDAiLCJlbWFpbCI6ImVhc2JyYXNpbEBnbWFpbC5jb20iLCJpYXQiOjE2MjUxNDcxMDN9.9Km4A3L0GeCZ6v-xFm3v39qO6bF0HwjxyTbELL5eu6Y");
	myHeaders.append("X-NETWORK-ID", "5f4fe34fa92184004ba03d50");

	var urlencoded = new URLSearchParams();

	var requestOptions = {
		method: 'GET',
		headers: myHeaders,
		redirect: 'follow'
	};

	const AcconResponse = await fetch("https://api.accon.app/v1/order/pending", requestOptions);
	const AcconResponseJson = await AcconResponse.json();
	response.json({
		AcconResponseJson
	})
}

export default PedidosPend;