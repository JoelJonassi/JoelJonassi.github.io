---
layout: post
title: Handle large list of images on Kotlin Android with Glide
description: Scrolling a large list of data can lead to a leak of memory or crash of the app. Many approach can be used like sliding window algorithm, API pagination, optimize image size, etc.
summary: 
tags: Kotlin, Android
---
<i>"Tell me and I forget. Teach me and I remember. Involve me and I learn." Benjamin Franklin</i>

## Android

Scrolling through a large list of data can lead to memory leaks or app crashes. Various approaches, such as sliding window algorithms, API pagination, and optimizing image sizes, can be used to manage this. However, to simplify the process, you can use the Glide library.

Glide is an open-source library that helps handle large lists of images in your app smoothly, without causing memory leaks or crashes.

According to the official repository, “Glide is a fast and efficient open-source media management and image loading framework for Android that wraps media decoding, memory and disk caching, and resource pooling into a simple and easy-to-use interface”.

## Usage in Gradle

Add the following to your `build.gradle` file:

```gradle
repositories {
  google()
  mavenCentral()
}

dependencies {
  implementation 'com.github.bumptech.glide:glide:4.16.0'
} 
```

### Implementation
The Glide library can be used to fetch an image from a cloud resource directly to an ImageView element in the layout:


```
val urlResource = "https://..."
Glide.with(this).load(urlResource).into(imageView)
```
Glide is commonly used in adapters when a large amount of data needs to be displayed.

XML Layout (image_item.xml)
```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:gravity="center"
    android:orientation="vertical">

    <ImageView
        android:id="@+id/image"
        android:layout_width="150dp"
        android:layout_height="150dp"
        android:layout_gravity="center"/>
</LinearLayout>
```
### Adapter Implementation

```
class ImageAdapter(val activity: Activity) : RecyclerView.Adapter<ImageAdapter.ViewHolder>() {
    private var images: MutableList<Image>? = null

    fun setEvents(images: MutableList<Image>?) {
        this.images = images
        notifyDataSetChanged()
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ImageAdapter.ViewHolder {
        return ViewHolder(LayoutInflater.from(activity).inflate(R.layout.image_item, parent, false))
    }

    inner class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val image: ImageView = view.findViewById(R.id.image)
    }

    override fun onBindViewHolder(holder: ImageAdapter.ViewHolder, position: Int) {
        images?.get(position)?.let { image ->
            // Glide can be used with URL
            Glide.with(activity)
                .load(image.imageUrl)
                .into(holder.image)

            // Glide can be used with base64 string
            Glide.with(activity)
                .load(base64ToBitmap(image.imageBase64))
                .into(holder.image)

            // Glide can be used with image file
            val file = image.imagePath?.let { File(it) }
            if (file?.exists() == true) {
                Glide.with(activity)
                    .load(file)
                    .into(holder.image)
            }
        }
    }

    override fun getItemCount(): Int {
        return images?.size ?: 0
    }
}
```

### Image Model
The Image model can have attributes like imageUrl, imageBase64, and imagePath. Glide is capable of handling all these formats.
 
 ```
class Image(
    val imageUrl: String? = null,
    val imageBase64: String? = null,
    val imagePath: String? = null
)
```
Conclusion
In this article, you learned how to load and cache images smoothly while scrolling in an Android application using the Glide library.

You can find the official documentation of Glide here.

