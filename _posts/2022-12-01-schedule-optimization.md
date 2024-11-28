---
layout: post
title: Schedules Optimization with Intelligent Agents
description: Optimizing class schedules to minimize campus travel and classroom utilization using artificial intelligence.
summary: A project applying intelligent agents and artificial intelligence algorithms to optimize class scheduling and predict housing data from California.
tags: Python, AI, Machine Learning, Random Forest, Clustering, Decision Trees, Jupyter, GitHub
---

<i>"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin</i>

## Overview

This project was developed as part of an **Artificial Intelligence** course, where we applied intelligent agent algorithms to solve complex scheduling and prediction problems. The project was split into two main parts:

### Part 1: Class Schedule Optimization

The goal of this part of the project was to develop an intelligent agent capable of optimizing class schedules to minimize travel to campus and reduce classroom usage, contributing to energy savings and more efficient campus management.

#### Problem Constraints:
- Classes are 2 hours long and take place on weekdays.
- Each class has 10 lessons per week, with 1 or 2 of them being online.
- No class can have more than 3 lessons per day.
- Online classes cannot be scheduled immediately before or after in-person classes.
- Up to 2 lessons are allowed in the morning and 2 in the afternoon.
- Each class requires 2 to 4 lessons in a specific classroom.
- Classrooms cannot be double-booked.
- All lessons must start at least at 9 AM and end by 6 PM.

#### Objective:
The objective was to create an agent that finds the best class schedule while minimizing the number of days classes have to commute to campus and reducing the overall need for classrooms.

### Part 2: Housing Data Analysis and Prediction

For the second part of the project, we analyzed a dataset of California houses to predict key factors about the properties and the residents.

#### Objectives:
- Predict the distance of a house from the beach.
- Classify areas with the highest purchasing power.
- Find patterns between house prices, age, and the income of residents.

#### Methodology:
- **Random Forest** and **Decision Tree Classifier** algorithms were used for classification tasks.
- **K-means clustering** was employed to identify areas with similar characteristics, such as purchasing power.
- **Association rules** were mined using the **Apriori** algorithm to uncover patterns between house prices, age, and income.

### Conclusion

The project involved applying various **Artificial Intelligence** algorithms to real-world problems, showcasing the power of intelligent agents in solving complex scheduling issues and making predictions based on data. The scheduling agent successfully optimized class schedules to reduce campus travel and classroom usage. The housing analysis demonstrated how machine learning techniques could uncover meaningful patterns in data and make informed predictions.

### Technologies & Tools Used:
- **Python**: Primary programming language for AI implementation.
- **Jupyter**: Used for interactive development and testing of AI models.
- **Constraint Satisfaction Problems (CSP)**: Approach used to model the class scheduling problem.
- **Machine Learning Algorithms**: Random Forest, Decision Trees, K-means, Apriori.
- **Git & GitHub**: Version control and collaboration tools used for the project.

---

### Skills Acquired:
- Artificial Intelligence techniques, including machine learning algorithms and intelligent agent development.
- Working with real-world datasets and applying predictive models.
- Experience with version control and collaborative tools such as Git and GitHub.

[View the project on GitHub](https://github.com/JoelJonassi/ArtificialIntelligence15505and19698/tree/main)
