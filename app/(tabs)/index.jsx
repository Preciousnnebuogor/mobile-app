 import { View, Text, StyleSheet, ImageBackground, Pressable, TextBase } from 'react-native'
 import React from 'react'
 import {Link} from 'expo-router'
 import manImg from '@/assets/images/man.png'
 
 const app = () => {
   return (
     <View style={styles.container}>
       <ImageBackground source={manImg} resizeMode="cover" style={styles.image}>
         <Text style={styles.title}>Container Box</Text>

         <Link href="/contact" style={{ marginHorizontal: "auto" }} asChild>
           <Pressable style={styles.button}>
             <Text style={styles.buttonText}>Contact Us</Text>
           </Pressable>
         </Link>
       </ImageBackground>
     </View>
   );
 }
 
 export default app 

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     flexDirection: "column",
   },
   image: {
     width: "100%",
     height: "100%",
     flex: 1,
     resizeMode: "cover",
     justifyContent: "center",
   },
   title: {
     color: "white",
     fontSize: 42,
     fontWeight: "bold",
     textAlign: "center",
     marginBottom: 120,
     backgroundColor: "rgba(0,0,0,0.5)",
   },
   link: {
     color: "white",
     fontSize: 42,
     fontWeight: "bold",
     textAlign: "center",
     textDecorationLine: "underline",
     padding: 4,
     backgroundColor: "rgba(0,0,0,0.5)",
   },
   button: {
     height: 60,
     borderRadius: 20,
     backgroundColor: 'rgba(0,0,0,0.7)',
     padding: 6,
     justifyContent: 'center',
   },
   buttonText: {
     color: "white",
     fontSize: 16,
     fontWeight: "bold",
     textAlign: "center",
     padding: 4,
  
   },
 });