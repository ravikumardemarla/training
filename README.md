***MicroServices***

### `UserAuthService`
### proto
``
frApp.proto
``
```
Usage and dependency

From Intelli-vision get's the event of user recored. 
after 5 seconds sends to user access service then sends to Db service saves in DB.

* EmailService
* UserAccessService

Calls
 1. EmailService.sendMailIntruder()
    Camera captured a person, if person untrained send's email.
 2. UserAccessService.savePiggybackUser()
    In 5 seconds, total camera captured events to send.
    collention having personName known and unknows, isPiggyback is true.
```
 
 ### `UserAccessService`
 ### proto
 ``
 frApp.proto
 ``
 ```
  Usage and dependency
  * DbService
  
  Calls
  1. DbService.savePiggybackUser()
  
 ```

### `AdminService`
### proto
 ``
 frApp.proto
 ``
 ```
   Usage and dependency
   Admin sevice peform crud for user, and camera captured details.
   
   * DbService
   * EmailService
   
   front end calls:
   1. getAllUsers
   2. /userById
   3. /getData ( Camera captured records)
   4. /delete-user
   5. /send-mail-self-reg
   6. /update-user
   
   Microservice Calls
   1. DbService.getAllUsers()
        get all registred users
   2. DbService.getUserById()
        full user details based on id
   3. DbService.getAllRecords()
        get all camera captured recodes.
   4. DbService.deleteUser()
        delete a user based on id
   5. DbService.getUserApproved()
        User status get updated isApproved -> false to true.
   6. EmailService.sendMailSelfRegistration()
        Send mail to user for registration.
  ```

### `ConfigurationService`
### proto
``
configution.proto
``
```
Usage 
    Saves Email info into db sender and reciver details.

dependency
    DbService

Front end calls:
    /email-configuration

Microservice Calls
    1. DbService.saveEmailConfigurations()
        This operation perform save or update email configuration.
```

### `UserRegService`
### proto
``
reg.proto
``
```
Usage 
    Save user details, save images in local drive and device info.
dependency
    DbService

Front end calls:
    /add-user
    /deviceInfo
Microservice Calls
    1. DbService.saveDeviceInfo()
        Save device details, which is used in user registration process.
    2. DbService.userRegistration()
        Save user details and save images in local upload folder.
        constraints: emailid, employeddId should be unique.
```


MicroService flow diagram:

![alt text](https://drive.google.com/uc?id=1CCrMM3hvBeA-zejEADuVnTmuz2GkSeae)


FR App Architecture diagram:

![alt text](https://drive.google.com/uc?id=1Eol6--nsG6d5QCtjmQkXsYwZCGcEmY1B)
