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
    constructor(id, title, content, author, dateCreated = new Date(), image = '') {
      this.id = id;
      this.title = title;
      this.content = content;
      this.author = author; 
      this.dateCreated = dateCreated;
      this.image = image;
    }
  }
  
  export { User, Post };
  