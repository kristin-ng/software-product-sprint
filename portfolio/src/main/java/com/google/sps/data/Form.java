package com.google.sps.data;

/** An item on comment */
public class Form {

    private final long id;
    private final long timestamp;
    private final String comment;

    public Form(long id, long timestamp, String comment) {
        this.comment = comment;
        this.id = id;
        this.timestamp = timestamp;
    }
}
