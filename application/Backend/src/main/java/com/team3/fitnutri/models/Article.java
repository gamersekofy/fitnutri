package com.team3.fitnutri.models;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String author_first_name;
    private String author_last_name;
    private String article_title;
    private LocalDate post_date;

    public Article() {
    }

    public Article(LocalDate post_date, String article_title, String author_last_name, String author_first_name) {
        this.post_date = post_date;
        this.article_title = article_title;
        this.author_last_name = author_last_name;
        this.author_first_name = author_first_name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAuthor_first_name() {
        return author_first_name;
    }

    public void setAuthor_first_name(String author_first_name) {
        this.author_first_name = author_first_name;
    }

    public String getAuthor_last_name() {
        return author_last_name;
    }

    public void setAuthor_last_name(String author_last_name) {
        this.author_last_name = author_last_name;
    }

    public String getArticle_title() {
        return article_title;
    }

    public void setArticle_title(String article_title) {
        this.article_title = article_title;
    }

    public LocalDate getPost_date() {
        return post_date;
    }

    public void setPost_date(LocalDate post_date) {
        this.post_date = post_date;
    }
}