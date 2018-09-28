
# ImageListTextWidget

ImageListTextWidget render a list of circular images along with text section at the bottom. The last image is covered with an overlay color and text. Userful to render social sections in apps where you need to show list of users at multiple places

### How to:

```npm
npm install -S ImageListTextWidget
```


### Basic usage:

```react

let images = ["http://assets.hike.in/v1/assets/AIAAIAYYnHOX4A",
					"http://assets.hike.in/v1/assets/AIAAIAYYnQ5-AA",
					"http://assets.hike.in/v1/assets/AIAAIAYYnEweQA"];

	<ImageListTextView
		containerStyle={styles.containerStyle}
		images={images}
		imageType={'remote'}
		overlayText={'+323'}
		overlayText={'rgba(8, 18, 135, 0.5)'}
		overlayTextStyle={styles.styles.overlayTextStyle}
		text={"Manju, Ram & 323 others completed this challenge today"}
		textStyle={styles.bottomTextStyle}
		alignment={'vertical'}
		/>
```

Output: (vertical alignment)

![](https://storage.googleapis.com/platform-qa-segments/thumbnail/Screen%20Shot%202018-09-28%20at%2011.17.37%20AM.png)

----
Output: (horizontal alignment)

![](https://storage.googleapis.com/platform-qa-segments/thumbnail/horizontal_new.png)

### Props
                    
|name  |type |Description |
|:------------| :-----------:|:-----------|
|images  | array | An array of images - either http url or static assets.
|imageType  | string | Possible values - `static`  or  `remote` - to specify the image type ( static assets or http urls) in images array.
|imageStyle | ImagePropType | Style object for the images.
|alignment | string | Possible values - `vertical`  or  `horizontal` - to control the alignment of widget.
|text | string | Text that will appear below the list of images.
|textStyle| Text.propTypes.style | Style object for the text that will appear below the images.
|overlayColor | string | color that will appear on the leaf image circle.
|overlayText | string | Text that will appear on the leaf image circle.
|overlayTextStyle|Text.propTypes.style|  Style object for the overlayText.
