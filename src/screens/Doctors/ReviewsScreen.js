import React, { useState } from "react";
import { View, Text,TouchableOpacity ,StyleSheet, TextInput, Image } from "react-native";
import DoctorCard from "../../components/common/doctors/DoctorCard";
import Button from "../../components/common/basic/Button";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ReviewsScreen = () => {
    const navigation = useNavigation();
    const goToOtherScreen = () => {
    // Navigate to the other screen when "See more" is clicked
    navigation.navigate('Doctor Details');}
    const [review, setReview] = useState('');
    const handleReviewChange = (text) => {
    setReview(text);
    };
    const [expandedReviews, setExpandedReviews] = useState([]);
    const toggleExpanded = (id) => {
        setExpandedReviews((prevExpanded) =>
          prevExpanded.includes(id)
            ? prevExpanded.filter((item) => item !== id)
            : [...prevExpanded, id]
        );
      };
    const [defaultRating, setdefaultRating] = useState(1)
    const [maxRating, setmaxRating] = useState([1,2,3,4,5])
    const starImgFilled = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_filled.png'
    const starImgCorner = 'https://raw.githubusercontent.com/tranhonghan/images/main/star_corner.png'
    
    const CustomRatingBar = () => {
        return (
            <View style={styles.CustomRatingBarStyle}>
                {
                    maxRating.map((item, key) => {
                        return (
                            <TouchableOpacity 
                                activeOpacity={0.7}
                                key={item}
                                onPress={() => setdefaultRating(item)}
                                >
                                <Image 
                                    style={styles.starImgStyle}
                                    source={
                                        item<= defaultRating
                                            ? {uri: starImgFilled}
                                            : {uri: starImgCorner}
                                    }
                                />
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    };
    const handleSubmit = () => {
        // Add logic here for submitting the review (e.g., send it to the backend)
        console.log('Review submitted:', review);
        // Clear the input after submission
        setReview('');
    };

    return (
        <ScrollView>
            {/* <View>
                <TouchableOpacity onPress={goToOtherScreen}>
                    <Text style={styles.back}><Icon style={styles.icon} name="arrow-left"/> Back </Text>
                </TouchableOpacity>
            </View> */}
            <DoctorCard />
        <View style={styles.view}>
            <Text style={styles.title1}>Overall rating</Text>
            {/* stars function inserted here  */}
            <Text style={styles.title1}>All Reviews</Text>
            {reviews.map((review, id) => {
                const isExpanded = expandedReviews.includes(id);
                const displayText = isExpanded ? review.content : review.content.substring(0, 100);
                const isShortReview = review.content.length <= 100;
                return (
                    <View key={id}
                        style={[styles.reviewContainer, 
                        {borderBottomWidth: id == reviews.length - 1 ? 0 : 1,},]}>
                        <Text style={styles.paragraph}>{displayText}{!isShortReview && !isExpanded && '...'}</Text>
                        {review.content.length > 100 && (
                        <TouchableOpacity onPress={() => toggleExpanded(id)}>
                            <Text style={styles.readMore}>{isExpanded ? 'Read Less' : 'Read More'}</Text>
                        </TouchableOpacity>
                        )}
                    </View>
                );
            })}
        </View>
      <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Write your review here..."
        value={review}
        onChangeText={handleReviewChange}
        multiline
      />
      <View>
        <Text style={styles.title1}>Rate this Doctor:</Text>
        <CustomRatingBar/>
      </View>
      <Button title="Submit Review!" onPress={handleSubmit} />
    </View>

        </ScrollView>
    );
};




const styles = StyleSheet.create({
    back :{
        fontSize: 20,
        fontWeight: "bold",
        margin: 10,
    },
    icon: {
        fontSize : 15
    },
    view: {
        paddingTop: 16,
        paddingLeft: 20,
        paddingRight: 20,
    },
    title1: {
        color: "#1B98D2",
        fontSize: 18,
        fontWeight: "500",
        paddingTop: 10,
    },
    paragraph: {
        fontSize: 15,
        fontWeight: "bold",
        paddingTop: 10,
        paddingBottom: 10,
    },
    container: {
        margin: 20,
        
    },
    input: {
        height: 100,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
    },
    readMore: {
        color: 'gray',
        paddingBottom: 5,
      },
    CustomRatingBarStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 10,
        marginBottom:20,
    },
    starImgStyle: {
        width: 40,
        height: 40,
        resizeMode: 'cover',
    },
});

const reviews = [
    {
      content:
        "Dr. Smith is an exceptional physician! Their expertise and attention to detail make them stand out in their field. I've been under their care for various health concerns, and each time, they have provided thorough explanations and effective treatment plans. The friendly and supportive staff at the clinic also contribute to a positive overall experience. I highly recommend Dr. Smith for anyone seeking top-notch medical care.",
    },
  
    {
      content:
        "I've been a patient of Dr. Johnson for several years, and I couldn't be happier",
    },
  
    {
      content:
        "My experience with Dr. Williams has been nothing short of excellent. From the moment I walked into the office, the staff made me feel comfortable and at ease. Dr. Williams is not only highly skilled but also genuinely cares about their patients. They go above and beyond to ensure that all my questions are answered, and I feel involved in my healthcare decisions. The level of professionalism and dedication to patient well-being is evident throughout the entire practice. I'm grateful to have Dr. Williams as my healthcare provider.",
    },
  ];


  export default ReviewsScreen;