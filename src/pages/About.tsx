import React from 'react';
import { Observable, of, from, fromEvent, concat, interval, merge, 
        Subject, Subscription, Subscriber, ConnectableObservable,
        asyncScheduler, asapScheduler, queueScheduler} from 'rxjs';
import { catchError, filter, map, mergeMap, tap, take, takeUntil, observeOn,
        multicast, refCount, share, publish, publishLast, publishBehavior, publishReplay
} from 'rxjs/operators';
import { ajax, AjaxResponse } from 'rxjs/ajax'
import { throwError } from 'rxjs/index'

import { Book, Reader, Topic } from '../store/entities';

const books: Array<Book> = [
    {
        bookID: 1,
        title: 'Goodnight Moon',
        author: 'Margaret Wise Brown',
        publicationYear: 1953
    },
    {
        bookID: 2,
        title: 'Winnie-the-Pooh',
        author: 'A. A. Milne',
        publicationYear: 1926
    },
    {
        bookID: 3,
        title: 'Where the Wild Things Are',
        author: 'Maurice Sendak',
        publicationYear: 1963
    },
    {
        bookID: 4,
        title: 'The Hobbit',
        author: 'J. R. R. Tolkien',
        publicationYear: 1937
    },
    {
        bookID: 5,
        title: 'Curious George',
        author: 'H. A. Rey',
        publicationYear: 1941
    },
    {
        bookID: 6,
        title: 'Alices Adventures in Wonderland',
        author: 'Lewis Carroll',
        publicationYear: 1865
    },
    {
        bookID: 7,
        title: 'Corduroy',
        author: 'Don Freeman',
        publicationYear: 1968
    }
];

const readers: Array<Reader> = [
    {
        readerID: 1,
        name: 'Marie',
        weeklyReadingGoal: 350,
        totalMinutesRead: 5600
    },
    {
        readerID: 2,
        name: 'Daniel',
        weeklyReadingGoal: 210,
        totalMinutesRead: 3000
    },
    {
        readerID: 3,
        name: 'Lanier',
        weeklyReadingGoal: 140,
        totalMinutesRead: 600
    }
];

//#region Basic Concepts

// let books$ = new Observable<Book>((subscriber) => {
//     for (let book of books) {
//         subscriber.next(book);
//     }

//     setTimeout(() => {
//         subscriber.complete();
//     }, 1000);

//     return () => console.log('Executing teardown code');
// })

// books$.subscribe(
//     (book: Book) => console.log(book.title),
//     err => console.log(`ERROR ${err}`),
//     () => console.log('All done!')
// );

// let source1$ = of('hello', 10, true, books[0].title);
// source1$.subscribe(x => console.log(`${x} - ${typeof x}`));

// let source2$ = from(books);
// source2$.subscribe((book: Book) => console.log(book.title));

// concat(source1$, source2$).subscribe(v => console.log(v));

// let getReaders = document.createElement('button');
// getReaders.innerHTML = 'Get Readers';
// document.body.appendChild(getReaders);

// fromEvent(getReaders, 'click').subscribe(event => {
//     //console.log(event);

//     let readersDiv = document.getElementById('readers');
//     // if (readersDiv != null) {
//     //     for (let reader of readers) {
//     //         readersDiv.innerHTML += reader.name + '<br/>';
//     //     }
//     // }

//     ajax('api/topics2')
//         .pipe(
//             mergeMap<AjaxResponse, Array<Topic>>(ajaxResponse => JSON.parse(ajaxResponse.response).topics),
//             filter((topic: Topic) => topic.title.length > 8),
//             tap(x => console.log(`Title: ${x.title}`)),
//             //catchError(err => of<Topic>({id:'1', title: 'Handle Catch Error', description: 'With RxJs' }))
//             catchError((err, caught) => throwError(`oops! ${err.message}`))
//         )
//         .subscribe(value => {
//             // console.log(ajaxResponse);
//             // let topics = JSON.parse (ajaxResponse.response).topics;

//             // if (readersDiv != null) {
//             //     for (let topic of topics) {
//             //         readersDiv.innerHTML += topic.title + '<br/>';
//             //     }
//             // }
//             return console.log(`Value: ${value.title}`);
//         });
// });

// let timerButton = document.createElement('button');
// timerButton.innerHTML = 'Timer';
// document.body.appendChild(timerButton);

// let timesDiv = document.createElement('div');
// document.body.appendChild(timesDiv);

//let timer$ = interval(1000);
// let timer$ = new Observable(subscriber => {
//     let i: number = 0;
//     let intervalID = setInterval(() => {
//         subscriber.next(i++);
//     }, 1000);

//     return () => {
//         console.log('All interval done');
//         clearInterval(intervalID);
//     }
// })

// let cancelTimer$ = fromEvent(timerButton, 'click');

// let timerSubscription: Subscription = timer$
// .pipe(
//     //take(3)
//     takeUntil(cancelTimer$)
// )
// .subscribe(
//     value => timesDiv.innerHTML += `${new Date().toLocaleTimeString()} (${value}) <br/>`,
//     null,
//     () => console.log('All interval done')
// );

// let timerConsoleSubscription: Subscription = timer$.subscribe(
//     value => console.log(`${new Date().toLocaleTimeString()} (${value})`)
// );

//timerSubscription.add(timerConsoleSubscription);

// fromEvent(timerButton, 'click')
//     .subscribe(
//         event => timerSubscription.unsubscribe()
//     );

//#endregion

//#region Subject
// let subject$ = new Subject();

// let source$ = interval(1000)
//     .pipe(
//         take(4),
//         //multicast(subject$),
//         //publish(),
//         //publishLast(),
//         //publishBehavior(42),
//         publishReplay(),
//         refCount()
//         //share()
//     ); //as ConnectableObservable<number>; //Fix https://github.com/ReactiveX/rxjs/issues/2972

// source$.subscribe(
//     value => console.log(`Observer 1: ${value}`)
// );

// setTimeout(() => {
//     source$.subscribe(
//         value => console.log(`Observer 2: ${value}`)
//     );
// }, 1000)

// setTimeout(() => {
//     source$.subscribe(
//         value => console.log(`Observer 3: ${value}`)
//     );
// }, 2000)

// setTimeout(() => {
//     source$.subscribe(
//         value => console.log(`Observer 4: ${value}`),
//         null,
//         () => console.log(`Observer 4 complete`)
//     );
// }, 5000)

//source$.connect();

//console.log('Start script');

// let queue$ = of('Queue Scheduler (synchronous)', queueScheduler);
// let asap$ = of('Asap Scheduler (async micro task)', asapScheduler);
// let async$ = of('Async Scheduler (async task)', asyncScheduler);

// merge(async$, asap$, queue$)
// .subscribe(value => console.log(value));

// from([1,2,3,4], queueScheduler).pipe(
//     tap(value => console.log(`Value ${value}`)),
//     observeOn(asyncScheduler),
//     tap(value => console.log(`Double Value ${value * 2}`))
// ).subscribe();

// console.log('End script');

//#endregion

export const About: React.FunctionComponent = () => {

    const onClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {

    }

    return <div className="container">
        <div className="row">
            <button className="btn btn-primary"  >Submit</button>
            <div id="readers">

            </div>
        </div>
    </div>
};