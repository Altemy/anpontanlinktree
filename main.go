package main

import (
	"html/template"
	"net/http"
	"os"
)

func mainHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("views/index.html")
	if err != nil {
		panic(err.Error())
	}
	if err := t.Execute(w, nil); err != nil {
		panic(err.Error())
	}
}

func podcastHandler(w http.ResponseWriter, r *http.Request) {
	t, err := template.ParseFiles("views/podcast.html")
	if err != nil {
		panic(err.Error())
	}
	if err := t.Execute(w, nil); err != nil {
		panic(err.Error())
	}
}

func main() {
	http.HandleFunc("/", mainHandler)
	http.HandleFunc("/podcast/", podcastHandler)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static/"))))
	http.Handle("/img/", http.StripPrefix("/img/", http.FileServer(http.Dir("img/"))))
	port := os.Getenv("PORT")
	http.ListenAndServe(":"+port, nil)
	// http.ListenAndServe(":8080", nil)
}
