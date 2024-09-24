package com.loiane.crud_spring.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.loiane.crud_spring.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CourseController {

  private final CourseRepository courseRepository;

  //@RequestMapping(method = RequestMethod.GET)
  @GetMapping
  public List<com.loiane.crud_spring.model.Course> list() {
    return courseRepository.findAll();
  }

}



