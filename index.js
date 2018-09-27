import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Image, Text } from 'react-native';


const ALIGNMENT = {
	VERTICAL: 'vertical',
	HORIZONTAL: 'horizontal'
};

const IMAGE_TYPE = {
	STATIC: 'static',
	REMOTE: 'remote'
};

/**
 * ImageListTextView render a list of circular images along with text section at the bottom. The last image is covered with an overlay color and text.
    Userful for scenario where we need to show list of users at multiple places
 */
class ImageListTextView extends Component {

	static propTypes = {
		images: PropTypes.array.isRequired,
		text: PropTypes.string,
		overlayText: PropTypes.string,
		alignment: PropTypes.string,
		overlayColor: PropTypes.string,
		overlayTextStyle:Text.propTypes.style,
		imageStyle:'',
		textStyle:Text.propTypes.style,
		imageType: PropTypes.string.isRequired
	};


	static defaultProps = {
		images: null,
		text: "",
		overlayText: "",
		alignment: ALIGNMENT.VERTICAL,
	};

	getSource = (img) =>{
		const { imageType } = this.props;
		return imageType === IMAGE_TYPE.STATIC ? img: {uri:img};
	}

	render() {
		const { images,
			      text,
						overlayText,
						alignment,
						overlayColor,
						overlayTextStyle,
						imageStyle,
						textStyle  } = this.props;

		return (
			<View style={[styles.container, styles[alignment], this.props.containerStyle]}>
				<View style={styles.imageContainer}>
					{
						images.map((img,index)=>{
							if(index === images.length-1){
								return(<View style={[styles.leftMargin, styles.imageStyle , imageStyle]}>
									<Image source={this.getSource(images[index])} style={[styles.imageStyle,imageStyle]} resizeMode={this.props.resizeMode || 'cover'}/>
									<View style={[styles.overlayContainer, styles.overlayColor, overlayColor ? {backgroundColor:overlayColor}: {},styles.iconStyle, styles.imageStyle, imageStyle]}>
										<Text style={[styles.overlayTextStyle , overlayTextStyle]}>{overlayText}</Text>
									</View>
								</View>)
							}
							return(<Image source={this.getSource(images[index])} style={[styles.iconStyle, styles.leftMargin,styles.imageStyle, imageStyle]} resizeMode={this.props.resizeMode || 'cover'} />)
					})}
				</View>
				<View style={styles.textContainer}>
					<Text style={[styles.textStyle, textStyle]} numberOfLines={1}>{text}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center'
	},
	imageContainer:{
		flexDirection:'row',
		justifyContent:'center'
	},
	horizontal: {
		flexDirection: 'row',
	},
	vertical: {
		flexDirection: 'column',
		justifyContent: 'center'
	},
	iconStyle: {
		borderWidth:1,
		borderColor:'#fff',
	},
	leftMargin:{
		marginLeft:-7,
	},
	textContainer:{
		justifyContent: 'center',
		alignItems: 'center'
	},
	textStyle: {
		color:'#5e5e5e',
		fontSize:12,
		marginTop:6
	},
	overlayContainer:{
		...StyleSheet.absoluteFillObject,
		justifyContent:'center',
	},

	imageStyle:{
		height:42,
		width:42,
		borderRadius:20
	},
	overlayTextStyle:{
		fontSize:12,
		color:'#fff',
		textAlign:'center',
	},
	overlayColor:{
		backgroundColor: 'rgba(8, 18, 135, 0.5)'
	}
});

export default ImageListTextView;
