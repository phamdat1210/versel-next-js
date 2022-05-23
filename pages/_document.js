import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
    return (
		<Html lang={'en'}>
			<Head>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<meta name="keywords" content="sea group, recruit, tuyen dung, สรรหาคน, team" />
				<meta name="robots" content="index, follow" />
				<meta httpEquiv='cache-control' content='no-cache'/>
				<meta httpEquiv='expires' content='0'/>
				<meta httpEquiv='pragma' content='no-cache'/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
	  	</Html>
    );
}
 
export default Document;