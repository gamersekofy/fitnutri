package com.team3.fitnutri.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String first_name;
    private String last_name;
    private String article_title;

    public Article() {
    }

    public Article(String first_name, String last_name, String article_title, String id, String post_date) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.article_title = article_title;
        this.id = id;
        this.post_date = post_date;
    }

    public String getFirstName() {
        return first_name;
    }

    public void setFirstName(){
        this.first_name = first_name;
    }

    public String getLastName() {
        return last_name;
    }

    public void setLastName(){
        this.last_name = last_name;
    }

    public String setArticleTitle(){
        this.article_title = article_title
    }

    public void getArticleTitle(){
        return article_title
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public LocalDate setpostDate(){
        this.postDate = post_date;
    }

    public void getpostDate(){
        return post_date;
    }
}