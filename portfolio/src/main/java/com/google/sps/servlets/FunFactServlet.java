package com.google.sps.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Servlet that returns a random quote. */
@WebServlet("/fun-fact")
public class FunFactServlet extends HttpServlet {

  private List<String> funFact;

  @Override
  public void init() {
    funFact = new ArrayList<>();
    funFact.add("The First Computer Mouse was Made of Wood");
    funFact.add("People Blink Less When They Use Computers");
    funFact.add("MIT Has Computers That can Detect Fake Smiles");
  }

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String fact = funFact.get((int) (Math.random() * funFact.size()));

    response.setContentType("text/html;");
    response.getWriter().println(fact);
  }
}
