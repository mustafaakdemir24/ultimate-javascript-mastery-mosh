// method -> obj
// function -> global (window, global)

const video = {
  title: "a",
  play() {
    console.log(this);
  },
};

// Regular function
function playVodeo() {
  console.log(this);
}

// Constructor function
function Video(title) {
  this.title = title;
  console.log(this);
}

playVodeo(); // references -> global (Window, global)
const v = new Video("b"); // references -> {}
