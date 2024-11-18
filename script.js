/* Resetando margens e padding */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

/* Layout do header */
header {
    background-color: #333;
    color: #fff;
    padding: 20px 0;
}

header .container {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header h1 {
    font-size: 24px;
}

header nav ul {
    list-style: none;
    display: flex;
}

header nav ul li {
    margin-left: 20px;
}

header nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: 18px;
}

/* Seção sobre */
#sobre {
    padding: 50px 0;
    background-color: #fff;
}

#sobre .container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

#sobre h2 {
    font-size: 28px;
}

/* Seção projetos */
#projetos {
    padding: 50px 0;
    background-color: #f9f9f9;
}

#projetos .container {
    width: 90%;
    margin: 0 auto;
}

#projetos h2 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 30px;
}

.projetos-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 30px;
}

.projeto {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.projeto img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 15px;
}

.projeto h3 {
    font-size: 22px;
    margin-bottom: 10px;
}

.projeto p {
    font-size: 16px;
    margin-bottom: 15px;
}

.projeto a {
    display: inline-block;
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
}

.projeto a:hover {
    background-color: #555;
}

/* Seção Contato */
#contato {
    padding: 50px 0;
    background-color: #fff;
}

#contato .container {
    width: 90%;
    margin: 0 auto;
    text-align: center;
}

#contato h2 {
    font-size: 28px;
    margin-bottom: 30px;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

form label {
    font-size: 16px;
    margin-bottom: 5px;
}

form input, form textarea {
    width: 100%;
    max-width: 500px;
    padding: 10px;
    margin-bottom: 15px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

form button {
    padding: 10px 20px;
    background-color: #333;
    color: #fff;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

form button:hover {
    background-color: #555;
}

/* Footer */
footer {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
}

