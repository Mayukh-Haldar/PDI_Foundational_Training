# App4: Media Player

## Overview

A simple HTML5 media player demonstrating audio and video elements. Shows how to embed multimedia content directly in web pages using HTML5 `<video>` and `<audio>` tags with controls and playback attributes.

## Purpose

Learn and practice:

* HTML5 `<video>` element and attributes
* HTML5 `<audio>` element and attributes
* Media controls and playback options
* `<source>` element for video format definition
* Media sizing using attributes like `width`

---

## Page Content

### Title

```
Sample Audio and Video Example
```

The page contains:

* One video section with a sample MP4 video
* One audio section with a sample MP3 audio file

---

## Video Element

### Video Used in This App

```html
<video controls muted loop width="640">
    <source src="sample.mp4" type="video/mp4">
</video>
```

### Video Attributes

| Attribute     | Purpose                       | Notes                                 |
| ------------- | ----------------------------- | ------------------------------------- |
| `controls`    | Shows default player controls | Play, pause, seek, volume, fullscreen |
| `muted`       | Starts video with no sound    | Useful for autoplay cases too         |
| `loop`        | Replays video after ending    | Continuous playback                   |
| `width="640"` | Sets video width              | Height adjusts automatically          |

### Recommended Fallback Text (Optional Improvement)

```html
<video controls muted loop width="640">
    <source src="sample.mp4" type="video/mp4">
    Your browser does not support HTML5 video.
</video>
```

---

## Audio Element

### Audio Used in This App

```html
<audio src="sample_audio.mp3" controls muted></audio>
```

### Audio Attributes

| Attribute  | Purpose                    | Notes                     |
| ---------- | -------------------------- | ------------------------- |
| `controls` | Shows audio controls       | Play, pause, seek, volume |
| `muted`    | Starts audio without sound | User can unmute manually  |

### Audio with `<source>` (Optional Improvement)

```html
<audio controls muted>
    <source src="sample_audio.mp3" type="audio/mpeg">
    Your browser does not support HTML5 audio.
</audio>
```

---

## Media Formats

### Video Formats

```html
<source src="video.mp4" type="video/mp4">
<source src="video.webm" type="video/webm">
<source src="video.ogv" type="video/ogg">
```

### Audio Formats

```html
<source src="audio.mp3" type="audio/mpeg">
<source src="audio.ogg" type="audio/ogg">
<source src="audio.wav" type="audio/wav">
```

---

## Codec Compatibility

| Format | Audio Codec | Video Codec | Support   |
| ------ | ----------- | ----------- | --------- |
| MP3    | MPEG Audio  | -           | Excellent |
| MP4    | AAC         | H.264       | Excellent |
| OGG    | Vorbis      | Theora      | Good      |
| WebM   | Vorbis/Opus | VP8/VP9     | Good      |
| WAV    | PCM         | -           | Good      |

---

## Player Controls

Default video controls include:

* Play/Pause
* Seek bar
* Volume
* Time display
* Fullscreen (video)

Default audio controls include:

* Play/Pause
* Seek bar
* Volume
* Time display

---

## Responsive Media (Optional Improvement)

Add this CSS to make media scale on smaller screens:

```css
video, audio {
    max-width: 100%;
    height: auto;
}
```

---

## Accessibility Features

✓ Built-in controls are keyboard accessible
✓ Semantic structure using `<section>`
✓ Separate headings for video and audio sections
✓ Can be improved further by adding captions using `<track>`

### Captions Example

```html
<video controls muted loop width="640">
    <source src="sample.mp4" type="video/mp4">
    <track kind="captions" src="captions.vtt" srclang="en" label="English">
</video>
```

---

## Best Practices Applied

1. Controls are enabled for user interaction
2. Media is organized using semantic sections
3. Video uses `<source>` for clear format declaration
4. Muted playback avoids unexpected audio
5. Looping demonstrates repeated playback behavior

---

## File Structure

```
app4/
├── index.html
├── sample.mp4
└── sample_audio.mp3
```

---

## Learning Outcomes

After reviewing this app, you will understand:

* How to embed video and audio in HTML
* What media attributes like `controls`, `muted`, and `loop` do
* How `<source>` helps define media format
* How to structure media content with sections and headings

---

## How to View

1. Open `index.html` in a browser
2. Click play on the video
3. Test controls (seek, volume, fullscreen)
4. Scroll to audio section and play audio
5. Unmute to test sound

---

## Common Issues

| Issue                    | Solution                                          |
| ------------------------ | ------------------------------------------------- |
| Video not playing        | Check file name and path, ensure MP4 is supported |
| Audio not playing        | Verify MP3 file exists and is not corrupted       |
| No controls visible      | Ensure `controls` attribute is present            |
| Media loads but no sound | Remove `muted` or unmute manually                 |

---

## Author

Mayukh Haldar

## License

MIT

---

**[← Back to Frontend Basics](../README.md)** | **[Previous: App3](../app3/README.md)** | **[Next: App5 →](../app5/README.md)**
