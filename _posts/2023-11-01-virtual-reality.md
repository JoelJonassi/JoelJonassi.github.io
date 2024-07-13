---
layout: post
title: Public Speaking Phobia Mitigation
description: Scrolling a large list of data can lead to a leak of memory or crash of the app. Many approach can be used like sliding window algorithm, API pagination, optimize image size, etc.
summary: 
tags: Kotlin, Android
---


<i>"Tell me and I forget. Teach me and I remember. Involve me and I learn." Benjamin Franklin</i>



 <div id="pdf-container"> </div>


<script>
  // URL of the PDF
  const url = '../docs/Paper_CENTERIS_VR.pdf';

  // Asynchronous download of PDF
  pdfjsLib.getDocument(url).promise.then(function(pdf) {
            console.log('PDF loaded');

            // Loop through each page
            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
                // Fetch each page
                pdf.getPage(pageNumber).then(function(page) {
                    var scale = 3
                    var viewport = page.getViewport({ scale: scale });

                    // Prepare canvas using PDF page dimensions
                    var canvas = document.createElement('canvas');
                    canvas.className = 'pdf-page';
                    var context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    // Render PDF page into canvas context
                    var renderContext = {
                        canvasContext: context,
                        viewport: viewport
                    };
                    var renderTask = page.render(renderContext);
                    renderTask.promise.then(function() {
                        console.log('Page rendered', pageNumber);
                    });

                    // Append canvas to the container
                    document.getElementById('pdf-container').appendChild(canvas);
                });
            }
        });

</script>

