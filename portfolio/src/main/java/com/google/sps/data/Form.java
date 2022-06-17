package com.google.sps.data;

/** An item on comment */
public class Form {
    private final String comment;
    private final long id;
    private final long timestamp;

    public Form(String comment, long id, long timestamp) {
        this.comment = comment;
        this.id = id;
        this.timestamp = timestamp;
    }
}
