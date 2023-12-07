import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5434414841106223"
     crossorigin="anonymous"></script>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
<header class="masthead" style="background-image: url(' {{url_for('static', filename ='img/home-bg.jpg') }}     ')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Aryan Industries</h1>
            <span class="subheading">By Sonone Family</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        
        <!-- Todo : Fetch it using loop from database -->
        {% for post in posts %}

        <div class="post-preview">
          <a href="/post/{{post.slug}}">
            <h2 class="post-title">{{ post.title }}            
            </h2>
            <h3 class="post-subtitle">
              {{post.tagline}}
            </h3>
          </a>
          <p class="post-meta">Posted by
            <a href="#">Aryan Industries</a>
            on {{post.date}}</p>
        </div>

        {{post.content[0:150]}}...
        <hr>
        
</li></a>
        {% endfor %}

        
        <!-- Pager -->
        <div class="clearfix">
          {% if number!=0 %}
          <a class="btn btn-primary float-left" href="{{prev}}">&larr; Previous</a>
          {% endif %}
          <a class="btn btn-primary float-right" href="{{next}}">Next &rarr;</a>
        </div>        
      </div>
    </div>
  </div>
  



      
        <header class="masthead" style="background-image: url(' {{url_for('static', filename ='img/home-bg.jpg') }}     ')">
    <div class="overlay"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="site-heading">
            <h1>Admin Panel</h1>
            <span class="subheading">Manage Your Site's Posts</span>
          </div>
        </div>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <h1>Basic Actions</h1>
        <a href="/edit/0"> <button class="btn btn-primary" >Add A New Post</button> </a>
        <a href="/logout"> <button class="btn btn-primary" >Logout</button> </a>
        <hr>
        <h1>Upload A File</h1>
          <form action="/uploader" method="post" enctype="multipart/form-data">
          <input type="file" name="file1">
          <button class="btn btn-primary" type="submit">Submit</button>
          
          </form>
        <hr>
        <h1>Edit Posts</h1>
        <table class="table">
            <thead>
              <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>Date</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>


              {% for post in posts %}
              <tr>
                <td>{{post.sno}}</td>
                <td>{{post.title}}</td>
                <td>{{post.date}}</td>
                <td><a href="/edit/{{post.sno}}"><button class="btn btn-primary" >Edit</button> </a> </td>
                <td><a href="/delete/{{post.sno}}"><button class="btn btn-primary" >Delete</button> </a> </td>
              </tr>
              
              {% endfor %}



            </tbody>
          </table>
        </div>
      </div>
     </div>
    </div>





      
      <div class="container">
    <div class="row">
      <div class="col-lg-8 col-md-10 mx-auto">
        <p>Hi I Am Aryan Sonone. I Love Python Programing Language. I am learning this from CodeWithHarry. And I am a good boy. </p>
      </div>
    </div>
  </div>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5434414841106223"
     crossorigin="anonymous"></script>
      <Counter />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
