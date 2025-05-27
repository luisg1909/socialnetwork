class User {
    constructor(username, Firstname, Lastname, Email , Month , Day ,Year ,Password,AboutMe
      , Work, Education, Interests , Networks , Hometown ,Relationship ,ProfilePic ) {
      this.username = username;
      this.Firstname = Firstname;
      this.Lastname = Lastname;
      this.Email = Email; 
      this.Month = Month;
      this.Day = Day;
      this.Year = Year;
      this.Password = Password;
      this.ProfilePic = ProfilePic;      
      this.AboutMe = AboutMe;
      this.Work = Work;
      this.Education = Education; 
      this.Interests = Interests;
      this.Networks = Networks;
      this.Hometown = Hometown;
      this.Relationship = Relationship;
      this.ProfilePic = ProfilePic;
    }
  }

  

  
  class Post {
    constructor(username, content, image = '', dateCreated = new Date(),kind) {
     
      this.username = username;
      this.content = content;      
      this.dateCreated = dateCreated;
      this.image = image;
      this.kind = kind; 
    }
  }
  
  export { User, Post };
  