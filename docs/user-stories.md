# User Stories

- As a user, I need to be able to create a diary.
- As a user, I need to be able to make an entry to the diary
- As a user, I need to be able to view diary entries.
- As a user, I shouldn't be able to access the diary if it is locked
- As a user, I should be able to access the diary if it is unlocked
- As a user, I need to be able to lock the diary
- As a user, I need to be able to unlock the diary
- As a user, I need to be able to make an entry to the diary when I have access
- As a user, I need to be able to view an entry to the diary when I have access


**User story 1**

| Object | Properties | Message | Output |
|:------:|:----------:|:-------:|:------:|
| Diary  |            |         | @void  |



**User story 2**

| Object |        Properties        |      Message      | Output |
|:------:|:------------------------:|:-----------------:|:------:|
| Diary  | Messages@array[@strings] | addEntry(@string) | @void  |





**User story 2**

| Object |   Properties   |       Message       | Output |
|:------:|:--------------:|:-------------------:|:------:|
|  Lock  | Active@Boolean | unlockDiary(@Diary) | @void  |
| Diary  |                |                     |        |

**User story 3**

| Object |     Properties     |   Message   |  Output  |
|:------:|:------------------:|:-----------:|:--------:|
|  Lock  |   Active@Boolean   |             |          |
| Diary  | messages[@message] | checkLock() | @Boolean |