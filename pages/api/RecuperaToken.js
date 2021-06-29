async function PegaToken(request, response) {

	var cEmail = "easbrasil@gmail.com";
	var cSenha = "Eas2125";
	var cRede = "5f4fe34fa92184004ba03d50";

	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

	var urlencoded = new URLSearchParams();
	urlencoded.append("email", cEmail);
	urlencoded.append("password", cSenha);
	urlencoded.append("network", cRede);

	var requestOptions = {
		method: 'POST',
		headers: myHeaders,
		body: urlencoded,
		redirect: 'follow'
	};

	const AcconResponse = await fetch("https://api.accon.app/v1/auth/login", requestOptions);
	const AcconResponseJson = await AcconResponse.json();
	const Token = AcconResponseJson.token;
	response.json({
		tokenAcesso: Token
	});
}

export default PegaToken;