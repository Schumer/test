<?php
$servername = "mysql:host=rdbms.strato.de;dbname=dbs12936037"; // oder der Servername deines Hosting-Providers
$username = "looks-familiar.com";
$password = "Heute240524&";
$dbname = "dbs12936037";

// Verbindung zur Datenbank herstellen
$conn = new mysqli($servername, $username, $password, $dbname);

// Verbindung überprüfen
if ($conn->connect_error) {
    die("Verbindung fehlgeschlagen: " . $conn->connect_error);
}

$sql = "SELECT id, name, wert FROM silver";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Ausgabe der Datensätze
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["name"]. " - Wert: " . $row["wert"]. "<br>";
    }
} else {
    echo "0 Ergebnisse";
}
$conn->close();
?>
