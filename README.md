Debouncing:
    when i am typing slow difference of key press =200ms
    when i am typing fast difference of key press =20ms takes less api call

Performance:
    iphone pro max=14letter *1000=14000 api calls
    -with debouncing 3 Api calls *1000=3000 api calls

Debouncing with 200ms
    -if difference between 2 key strokes is<200ms -DECLINE API call
    ->200ms make an Api call
