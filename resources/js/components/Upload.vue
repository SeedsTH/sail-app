<template>
    <div class="container">
        <div>
            <label >Upload an image to Firebase new:</label>
            <input type="file" @change="previewImage" accept="image/*" />
        </div>
        <div v-if="imageData != null">
            <img class="preview" :src="picture" />
            <br />
            <button @click="onUpload">Upload</button>
        </div>
        
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage"
import db from '../firebase/firebaseInit'
export default {
    name: "Upload",
    data() {
        return {
            images: [],
            imageData: null,
            picture: null,
            imageRef: null,
            imageURL: null,
        };
    },
    methods: {
        previewImage(event) {
            this.uploadValue = 0;
            this.picture = null;
            this.imageData = event.target.files[0];
        },
        onUpload() {
            this.picture = null;
            const storageRef = firebase
                .storage()
                .ref(`images/${this.imageData.name}`)
                .put(this.imageData);

            
             
        },

        

        // getImage() {
        //     const storageRef = db.storage().ref()
        //     const imageRef = storageRef.child(`images/${this.imageData.name}`)
        // },
    },
    mounted() {
    //const id = this.$route.params.id;
    // const imageFile = db.collection('images/');

    // imageFile.get().then(doc => {
    //     if (doc.exists) {
    //         console.log(doc.data()) 
    //         this.imageURL = doc.data().imageURL
    //     } else {
    //         console.log('no data')
    //     }
    // }).catch(err => {
    //             console.log(err)
    // })
  }
};
</script>

<style lang="scss" scoped>
    .container {
        padding: 10px 30px ;
        height: 400px;
    }



</style>