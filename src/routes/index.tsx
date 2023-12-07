import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5434414841106223"
     crossorigin="anonymous"></script>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      
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
