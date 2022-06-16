package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.time.Clock;
import java.time.Instant;


/** Servlet that responds with the current date. */
@WebServlet("/date")
public class DateServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    Clock clock = Clock.systemDefaultZone();
    Instant instant = clock.instant();
    response.getWriter().println("The server's current zone is " + clock);
    response.getWriter().println("The server's current time is " + instant);
  }
}