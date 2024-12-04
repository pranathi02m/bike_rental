package com.shounoop.bikerentalspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shounoop.bikerentalspring.entity.Bike;

@Repository
public interface BikeRepository extends JpaRepository<Bike, Long> {
}
