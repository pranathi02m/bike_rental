package com.shounoop.bikerentalspring.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shounoop.bikerentalspring.entity.BookABike;

import java.util.List;

@Repository
public interface BookABikeRepository extends JpaRepository<BookABike, Long> {

    List<BookABike> findAllByUserId(Long userId);
}
