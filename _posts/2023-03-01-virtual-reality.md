---
layout: post
title: Public Speaking Phobia Mitigation (Project & Research)
description: A project and research initiative to mitigate public speaking phobia using VR training and web platforms, developed in collaboration with an Erasmus+ team.
tags: VR, Unity, Public Speaking, Phobia Mitigation
---

<i>"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin</i>


<div class="section-container">
  <h2>Project Overview</h2>
  <p>
    As part of an Erasmus+ funded research team spanning five European countries, I contributed to a project aimed at mitigating social phobia in public speaking. The outcome was a system comprising a VR mobile application and a web platform.
  </p>
  
  <p>
    The project included:
    <ul>
      <li>Virtual Reality app for public speaking simulations.</li>
      <li>A web platform to manage scenarios and speeches.</li>
    </ul>
  </p>

  <h3>Research Contribution</h3>
<p>
    The findings were published in the Centeris International Conference under the title:
    <i>"VR Training for Public Speaking"</i>, DOI: 10.1016/j.procs.2024.06.416.001. Co-authored with Luís Ferreira and José Cerqueira, this research highlights virtual reality's role in managing public speaking phobia. 
</p>
<p>
    This work was presented by me at the Centeris Conference, 2023, where I showcased the VR app's capabilities and its effectiveness in mitigating public speaking anxiety.
</p>
 
  <h3>System Features</h3>
  <p>
    <b>VR Mobile Application:</b>
    <ul>
      <li>Simulates public speaking scenarios and provides real-time feedback.</li>
      <li>Encourages participants to overcome anxiety and build confidence.</li>
    </ul>
  </p>
  <p>
    <b>Web Platform:</b>
    <ul>
      <li>Allows users to create and practice speeches in customizable scenarios.</li>
      <li>Supports shared scenarios for administrators and private options for users.</li>
    </ul>
  </p>

</div>

<div class="section-container">
  <h2>Media Gallery</h2>
  <div class="gallery row">
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img0.jpeg" class="img-responsive" alt="VR App Screenshot 1"></div>
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img1.jpeg" class="img-responsive" alt="VR App Screenshot 2"></div>
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img2.jpeg" class="img-responsive" alt="VR App Screenshot 3"></div>
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img3.jpeg" class="img-responsive" alt="VR App Screenshot 4"></div>
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img4.jpeg" class="img-responsive" alt="VR App Screenshot 5"></div>
    <div class="col-xs-12 col-md-6"><img src="../assets/images/Vr App/img5.jpeg" class="img-responsive" alt="VR App Screenshot 6"></div>
    <div class="col-xs-12 text-center">
      <img src="../assets/images/Vr App/img9.jpeg" class="img-responsive" alt="VR App Overview">
      <p><i>Virtual Reality App Overview</i></p>
    </div>
  </div>
</div>

<div class="section-container">
  <h2>Technologies Used</h2>
  <div class="tech-icons text-center">
    <img src="https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/csharp/csharp-original.svg" alt="C#" width="60">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/unity/unity-original-wordmark.svg" alt="Unity" width="60">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-plain.svg" alt="Angular" width="60">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="Bootstrap" width="60">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" width="60">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg" alt="Visual Studio" width="60">
    <img src="https://png.pngtree.com/png-clipart/20191121/original/pngtree-beautiful-android-logo-vector-glyph-icon-png-image_5149718.jpg" alt="Android" width="60">
  </div>
</div>

<div id="pdf-container">
  <h2>Research Paper</h2>
  <p>The full research paper is available in PDF format below:</p>
</div>

<script>
  const url = '../assets/docs/Paper_CENTERIS_VR.pdf';
  pdfjsLib.getDocument(url).promise.then(function(pdf) {
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      pdf.getPage(pageNumber).then(function(page) {
        const scale = 3;
        const viewport = page.getViewport({ scale: scale });

        const canvas = document.createElement('canvas');
        canvas.className = 'pdf-page';
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        const renderContext = { canvasContext: context, viewport: viewport };
        page.render(renderContext);

        document.getElementById('pdf-container').appendChild(canvas);
      });
    }
  });
</script>
