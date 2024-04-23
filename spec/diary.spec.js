import Diary from "../src/Diary.js";


describe("Diary Tests:", () => {
    let testDiary;

    beforeEach(() => {
        testDiary = new Diary();
    });

    afterEach(() => {
        testDiary = undefined;
    });

    it("should create a new instance of the Diary class", () => {
        // Arrange
        // Act
        // Assert
        expect(testDiary).toBeInstanceOf(Diary);

    });

    describe("addEntry function:", () => {
        it("should increase the messages length by 1 when addEntry() is called", () => {
            // Arrange
            const expected = testDiary.getMessages().length + 1;
            // Act
            testDiary.addEntry("first message");
            // Assert
            expect(testDiary.getMessages().length).toBe(expected);
        });

        it("should only add a string input to messages", () => {
            // Arrange
            const expected = testDiary.getMessages().length;
            // Act
            testDiary.addEntry(null);
            // Assert
            expect(testDiary.getMessages().length).toBe(expected);
        });
    });
    
    describe("viewEntries function:", () => {
        it("Should print all current entries when viewEntries() is called", () => {
            // Arrange
            // Act
            spyOn(console, "log");
            testDiary.viewEntries();
            // Assert
            expect(console.log).toHaveBeenCalledWith(...testDiary.getMessages())
        });
    });

    describe('Lock Tests:', () => { 
        let testLock;
        beforeEach(() => {
            testLock = jasmine.createSpyObj("testLock", {
                isLocked: true
            });
        });

        afterEach(() => {
            testLock = undefined;
        });

        it("should not be able to add a message to the diary when its locked", () => {
            // Arrange
            const expected = testDiary.getMessages().length;
            // Act
            testDiary.addEntry("Message1");
            // Assert

            expect(testDiary.getMessages(testLock).length).toBe(expected);
        })

        it("should not be able to view entries when the diary is locked", () => {
          // Arrange
            // Act
            spyOn(console, "log");
            testDiary.viewEntries(testLock);
          // Assert
            expect(console.log).not.toHaveBeenCalled();
        });
     })
    
});





// describe("Lock Tests:", () => {
//     it("should lock when lock diary is called", () => {
        
//     });
// });