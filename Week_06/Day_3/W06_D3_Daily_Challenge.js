/*
Instructions

In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

    Create a class named Video. The class should be constructed with the following parameters:
        title (a string)
        uploader (a string, the person who uploaded it)
        time (a number, the duration of the video - in seconds)
    Create a method called watch() which displays a string as follows:
    “uploader parameter watched all time parameter of title parameter!”
    Instantiate a new Video instance and call the watch() method.
    Instantiate a second Video instance with different values.
    Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
    Think of the best data structure to save this information within the array.
    Bonus: Loop through the array to instantiate those instances.
*/

class Video {
  constructor (title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(`${this.uploader} watched all ${this.time}s of ${this.title}!`);
  }

}

let video_1 = new Video("Pulp Fiction", "Quentin Tarantino", 154 * 60);

video_1.watch();

let video_2 = new Video("my daughter", "Eugene", 125);

video_2.watch()

let data_array = [];

for (i = 0; i < 5; i++) {
  let _video = {title: "title_1" + i, uploader: "uploader_1" + i, time: 134 + i}
  data_array.push(_video);
}

let video_array = [];

data_array.forEach((element) => {
  let new_video = new Video(element.title, element.uploader, element.time);
  video_array.push(new_video);
})

console.table(video_array);
video_array[3].watch();