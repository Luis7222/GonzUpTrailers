<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GonzUp Trailers Leasing</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: #f4f4f4;
      color: #333;
    }
    header {
      background: #004080;
      color: #fff;
      padding: 30px 20px;
      text-align: center;
    }
    header h1 {
      margin: 0 0 10px;
      font-size: 2.5em;
    }
    header p {
      margin: 0;
      font-size: 1.2em;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding: 30px 20px;
    }
    .trailer-card {
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin: 15px;
      width: 300px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.1);
      transition: transform 0.2s ease-in-out;
    }
    .trailer-card:hover {
      transform: scale(1.02);
    }
    .trailer-card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-bottom: 1px solid #ccc;
    }
    .details {
      padding: 15px;
      font-size: 1em;
    }
    .available {
      color: #28a745;
      font-weight: bold;
    }
    .unavailable {
      color: #dc3545;
      font-weight: bold;
    }
    footer {
      background: #222;
      color: #ccc;
      text-align: center;
      padding: 20px;
      font-size: 0.9em;
      margin-top: 40px;
    }
    footer a {
      color: #ccc;
      text-decoration: none;
    }
    footer a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .trailer-card {
        width: 90%;
      }
    }
  </style>
</head>
<body>
  <header>
    <h1>GonzUp Trailers Leasing</h1>
    <p>Belly Dump Trailers Available for $1000/mo Month-to-Month or For Sale</p>
    <p>Call: <a href="tel:9562509968" style="color: #fff; text-decoration: underline;">956-250-9968</a> or Text: <a href="sms:9563299061" style="color: #fff; text-decoration: underline;">956-329-9061</a></p>
  </header>

  <div class="container">
    <!-- TRAILERS REMAIN UNCHANGED -->
    <a href="trailer1.html" style="text-decoration: none; color: inherit;"><div class="trailer-card">
      <img src="/mnt/data/IMG_4235.jpg" alt="Trailer 1">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price1">[Enter price]</span></p>
      </div></div></a>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_4236.jpg" alt="Trailer 2">
      <div class="details">
        <p>Status: <span class="unavailable">Currently Rented</span></p>
        <p>Sale Price: $<span id="price2">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_4238.jpg" alt="Trailer 3">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price3">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_4852.jpg" alt="Trailer 4">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price4">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_4853.jpg" alt="Trailer 5">
      <div class="details">
        <p>Status: <span class="unavailable">Currently Rented</span></p>
        <p>Sale Price: $<span id="price5">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_8789.jpg" alt="Trailer 6">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price6">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_8790.jpg" alt="Trailer 7">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price7">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_8791.jpg" alt="Trailer 8">
      <div class="details">
        <p>Status: <span class="unavailable">Currently Rented</span></p>
        <p>Sale Price: $<span id="price8">[Enter price]</span></p>
      </div>
    </div>

    <div class="trailer-card">
      <img src="/mnt/data/IMG_8793.jpg" alt="Trailer 9">
      <div class="details">
        <p>Status: <span class="available">Available for Rent</span></p>
        <p>Sale Price: $<span id="price9">[Enter price]</span></p>
      </div>
    </div>
  </div>

  <footer>
    &copy; 2025 Gonz Hauling & Leasing LLC. All rights reserved.
  </footer>
</body>
</html>
