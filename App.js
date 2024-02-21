import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [currentSection, setCurrentSection] = useState('name');

  const myResume = {
    name: 'Jhig-art H. Olmedo',
    course: 'Bachelor of Science in Information Tecnology',
    education: {
      elemetary: 'Tonsuya Elementay School',
      highSchool: 'MBASH',
      college: 'Global Reciprocal College',
    },
    about: 'Nothing Much',
    contact: {
      email: 'olmedo.jhig@gmail.com'
    },
  };

  const handlePress = () => {
    setCurrentSection(prevSection => {
      switch (prevSection) {
        case 'name':
          return 'education';
        case 'education':
          return 'about';
        case 'about':
          return 'contact';
        case 'contact':
          return 'name';
        default:
          return 'name';
      }
    });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={handlePress} style={styles.contentContainer}>
          {currentSection === 'name' && (
            <>
              <Image source={require('./assets/pic.jpg')} style={styles.image} />
              <View style={styles.textContainer}>
                <Text style={styles.header}>{myResume.name}</Text>
                <Text style={styles.info}>{myResume.course}</Text>
              </View>
            </>
          )}

          {currentSection === 'education' && (
            <View style={styles.textContainer}>
              <Text style={styles.header}>Education:</Text>
              <Text style={styles.projectTitle}>
                {'\n'}College:
                {'\n'}
              </Text>
              <Text style={styles.info}>{myResume.education.college}</Text>
              {'  |  '}

              <Text style={styles.projectTitle}>
                {'\n'}High School:
                {'\n'}
              </Text>
              <Text style={styles.info}>{myResume.education.highSchool}</Text>
              {'  |  '}

              <Text style={styles.projectTitle}>
                {'\n'}Elementary:
                {'\n'}
              </Text>
              <Text style={styles.info}>{myResume.education.elemetary}</Text>
              {'  |  '}
            </View>
          )}

          {currentSection === 'about' && (
            <View>
              <Text style = {styles.head}>About Me</Text>
              <Text style = {styles.par}>
              I am a College of Computer Science student of Global Reciprocal Colleges. I am a Graphic designer who loves Cats and Wild Birds, the future Artist
              </Text>
            </View>
          )}

          {currentSection === 'contact' && (
            <View>
              <Text style = {styles.head2}>My Project</Text>
              <View style = {styles.container}>
                <Image source = {require('./assets/logo.png')} style = {styles.img}/>
              </View>
              <Text style = {styles.head2}>Web-based Online Ordering and Sales Information System of Boxes of Joy</Text>
            </View>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 200,
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  info: {
    fontSize: 18,
    marginTop: 5,
    textAlign: 'center',
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 15,
    textAlign: 'center'
  },

  head2: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },

  par: {
    fontSize: 15,
    marginTop: 15,
    textAlign: 'center',
    paddingLeft: 30,
    paddingRight: 30
  },

  img: {
    height: 300,
    width: 300,
    marginTop: 15
  }
});

export default App;