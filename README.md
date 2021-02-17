<h1>API - LK21</h1>

<h3>Cara Pakai</h3>
<div style="background-color='#f4f9f9'">
  <pre>https://api-lk21.herokuapp.com/pathname?parameter=value</pre>
</div>

<h4>Data JSON yang akan didapatkan</h4>
<ul>
  <li>Title</li>
  <li>Thumbnail</li>
  <li>Genre</li>
  <li>Rating</li>
  <li>Duration</li>
  <li>Quality</li>
  <li>Trailer</li>
  <li>Watch</li>
</ul>

<h4>Pathname</h4>
<ul>
   <li>newupload</li>
   <li>comingsoon</li>
   <li>tv</li>
   <li>year</li>
   <li>country</li>
   <li>genre</li>
   <li>search</li>
</ul>

<h4>Parameter</h4>
<ul>
   <li>page</li>
   <li>query</li>
   <li>country</li>
   <li>genre</li>
   <li>year</li>
</ul>

<h4>Contoh</h4>
<b>1. Movie Terbaru yang diupload</b>
  <div style="background-color='#f4f9f9'">
    <pre>https://api-lk21.herokuapp.com/newupload</pre>
  </div>
  <p>Secara default akan memunculkan halaman ke 1. jika ingin memunculkan halaman berikutnya, gunakan parameter page seperti ini</p>
  <div style="background-color='#f4f9f9'">
    <pre>https://api-lk21.herokuapp.com/newupload?page=2</pre>
  </div>

<b>2. Movie yang akan tayang</b>
<div style="background-color='#f4f9f9'">
    <pre>https://api-lk21.herokuapp.com/comingsoon</pre>
  </div>
  
<b>3. TV Series</b>
<div style="background-color='#f4f9f9'">
    <pre>https://api-lk21.herokuapp.com/tv</pre>
  </div>
  
<b>4. Movie berdasarkan tahun</b>
<div style="background-color='#f4f9f9'">
    <pre>http://api-lk21.herokuapp.com/year?year=2020</pre>
  </div>
  
<b>5. Movie berdasarkan negara</b>
<div style="background-color='#f4f9f9'">
    <pre>http://api-lk21.herokuapp.com/country?country=indonesia</pre>
  </div>
  
<b>6. Movie berdasarkan genre</b>
<div style="background-color='#f4f9f9'">
    <pre>http://api-lk21.herokuapp.com/genre?genre=action</pre>
  </div>
  
<b>7. Movie berdasarkan pencarian</b>
<div style="background-color='#f4f9f9'">
    <pre>http://api-lk21.herokuapp.com/search?query=avenger</pre>
  </div>
 
